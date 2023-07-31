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
               <img src={imageLogin} alt="gambar login" style={
                  {
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                     objectPosition: "center"
                  }
               } />
            </div>
            <div className="login-form">
               <h1 className="login-text">Login</h1>
               <Form form={form} layout="vertical" onFinish={handleSubmit}>
                  <Form.Item name="email" label="Email"
                     rules={[{ required: true, message: "Harap isi email anda" },
                     { type: "email", message: "Email tidak valid" }]}
                  >
                     <Input className="form-input" />
                  </Form.Item>
                  <Form.Item name="password" label="Password"
                     rules={[{ required: true, message: "Harap isi password anda" }]}
                  >
                     <Input.Password className="form-input" />
                  </Form.Item>
                  <div className="btn-container">
                     <Button htmlType="submit" className="btn-login" loading={isLoading}>Masuk</Button>
                  </div>
               </Form>
            </div>
         </div>
         <div
            style={
               {
                  backgroundColor: "#423F3A",
                  height: "42px",
                  width: "100%",
                  marginTop: "-5px"
               }
            }
         ></div>
      </>
   )
}

export default Login