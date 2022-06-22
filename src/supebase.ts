import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';
// Create a single supabase client for interacting with your database 
const supabase = createClient('https://yqqgscmztylvdufvqzli.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcWdzY216dHlsdmR1ZnZxemxpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NDE1OTA0NCwiZXhwIjoxOTY5NzM1MDQ0fQ.22HcyCs2RazF4eR8mgctLhgQUqyKhXIc-nYVGw_Qp70')

//

const email = 'htheanh2000@gmail.com'

const getProduct = async (salon_id: string) => {
  return await supabase.from('product').select().eq('salon_id', salon_id)
}

const upload = async (bucket: string, preview: any) => {
  const id = uuidv4()
  return await supabase.storage
    .from(bucket)
    .upload(`public/${id}.jpg`, preview)
}

const createUser = async (values: any) => {
  return await supabase
    .from('user')
    .insert([
      {
        username: values.username,
        email: values.email,
        phone: values.phoneNumber,
      }
    ])
}


const createEmployee = async (employee: any) => {
  return await supabase
    .from('employee')
    .insert([
      {
       ...employee   
      }
    ])
}


export {
  getProduct,
  upload,
  createUser,
  createEmployee
}
export default supabase

