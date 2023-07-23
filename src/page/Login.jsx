import Header from "../components/Header"
import imageLogin from '../assets/image-login.png'
import { Button, Form, Input, message } from 'antd';
import useHttp from "../hooks/use-http";
import Cookies from "js-cookie";

const Login = () => {
   const [form] = Form.useForm();
   const { isLoading, sendRequest } = useHttp();

   const handleSubmit = async () => {
      try {
         const values = await form.validateFields();
         sendRequest({
            url: "/api/v1/users/login",
            method: "POST",
            body: values,
         },
            (data) => {
               Cookies.set("token", data.token);
               Cookies.set("email", data.data.user.email);
               message.success("Login berhasil");
               // navigate("/dashboard");
            }
         )
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <>
         <Header />
         <div className="login-container">
            <div>
               <img src={imageLogin} alt="gambar login" />
            </div>
            <div className="login-form">
               <h1 className="login-text">Login</h1>
               <Form form={form} layout="vertical" onFinish={handleSubmit}>
                  <Form.Item name="email" label="Email"
                     rules={[{ required: true, message: "Harap isi email anda" },
                     { type: "email", message: "Email tidak valid" }]}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item name="password" label="Password"
                     rules={[{ required: true, message: "Harap isi password anda" }]}
                  >
                     <Input.Password />
                  </Form.Item>
                  <div className="btn-container">
                     <Button htmlType="submit" className="btn-login" loading={isLoading}>Login</Button>
                  </div>
               </Form>
            </div>
         </div>
      </>
   )
}

export default Login