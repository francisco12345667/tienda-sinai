import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://tustaujoyzmkfgpfcwoqi.supabase.co'; // Tu URL de proyecto
const supabaseAnonKey = 'sb_publishable_9N90LNZ1m3rK7QMUzhaM_A_RfX_3raf'; // TU CLAVE QUE ME ACABAS DE PASAR

export const supabase = createClient(supabaseUrl, supabaseAnonKey);