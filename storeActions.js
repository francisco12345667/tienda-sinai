import { supabase } from './db.js';

export const StoreActions = {
    sincronizarDatos: async (callback) => {
        try {
            // 1. Carga inicial de datos
            const { data, error } = await supabase.from('producto').select('*');
            if (error) throw error;
            if (data) callback(data);

            // 2. Suscripción a cambios en tiempo real
            return supabase
                .channel('realtime:producto')
                .on('postgres_changes', { event: '*', schema: 'public', table: 'producto' }, async () => {
                    const { data: newData } = await supabase.from('producto').select('*');
                    if (newData) callback(newData);
                })
                .subscribe();
        } catch (err) {
            console.error("Error en sincronización:", err);
        }
    },

    recordSale: async (venta) => {
        const { data, error } = await supabase.from('ventas').insert([venta]);
        if (error) throw error;
        return data;
    },

    saveProduct: async (producto) => {
        const { data, error } = await supabase.from('producto').upsert([producto]);
        if (error) throw error;
        return data;
    },

    deleteProduct: async (id) => {
        const { error } = await supabase.from('producto').delete().eq('id', id);
        if (error) throw error;
    }
};
