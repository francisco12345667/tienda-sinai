import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://tstaujoyzmkfgpfcwoqi.supabase.co'; // Tu URL de proyecto
const supabaseAnonKey = 'sb_publishable_CjJm-3O709zXk-8-RX6oVQ_iLtSckaM'; // TU CLAVE QUE ME ACABAS DE PASAR

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
