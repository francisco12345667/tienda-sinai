import { supabase } from './db.js';

export const StoreActions = {
    sincronizarDatos: async (callback) => {
        // Usamos 'producto' (singular)
        const { data } = await supabase.from('producto').select('*');
        if (data) callback(data);

        return supabase
            .channel('public:producto')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'producto' }, () => {
                supabase.from('producto').select('*').then(({ data }) => {
                    if (data) callback(data);
                });
            })
            .subscribe();
    },

    recordSale: async (venta) => {
        // Asegúrate de tener una tabla llamada 'ventas' en Supabase
        const { data, error } = await supabase.from('ventas').insert([venta]);
        if (error) throw error;
        return data;
    },

    saveProduct: async (producto) => {
        const { data, error } = await supabase.from('producto').upsert([producto]);
        if (error) throw error;
        return data;
    },

    saveProductPhoto: async (productId, file) => {
        const filePath = `producto/${productId}/${Date.now()}.jpg`;
        const { error } = await supabase.storage
            .from('imagenes')
            .upload(filePath, file);
        if (error) throw error;
        
        return supabase.storage.from('imagenes').getPublicUrl(filePath).data.publicUrl;
    },

    deleteProduct: async (id) => {
        const { error } = await supabase.from('producto').delete().eq('id', id);
        if (error) throw error;
    }
};