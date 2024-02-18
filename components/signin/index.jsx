"use client"
import { useState } from 'react'
import { 
    Form,
    Input,
    Button
} from 'antd';
import Image from 'next/image'
import Link from 'next/link'
import { 
    MailOutlined, 
    LockOutlined, 
    EyeOutlined, 
    EyeInvisibleOutlined
} from '@ant-design/icons'

const { Item } = Form
const { signinForm } = Form.useForm 
const SignIn = ()=>{
    const [passwordType, setPasswordType] = useState("password")

    const signin = ()=>{
        signupForm.resetFields();
    }

    return (
        <div className="grid md:grid-cols-2">
            <div className='flex flex-col items-center justify-center md:min-h-screen bg-[#ECE9EC] gap-8'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-4xl font-bold'>Edex</h1>
                    <p className='text-dm text-[grey]'>Let's learn something new today!</p>
                </div>
                <Image 
                    src="/images/sign.svg"
                    alt="sign"
                    width={400}
                    height={400}
                />
            </div>
            <div className='flex flex-col md:p-16 p-8 gap-8'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-3xl font-bold'>Welcome Back!</h1>
                    <p className='text-sm text-[grey]'>Nice to see you! Please Sign in with your account</p>
                </div>
                <Form
                    form={signinForm}
                    layout='vertical'
                    autoComplete='off'
                    onFinish={signin}
                >
                    <Item
                        label = {<span className='text-md font-semibold text-center'>Email Address!</span>}
                        name= "email"
                        rules={[{
                            required: true
                        }]}
                    >
                        <Input
                            type="email"
                            size='large'
                            placeholder='Email'
                            className='bg-[#ECECEC] border-0 rounded-none'
                            prefix={<MailOutlined className='text-[grey] mr-2' />}
                        />
                    </Item>
                    <Item
                        label={<span className="text-md font-semibold">Password</span>}
                        name="password"
                        rules={[{
                            required: true,
                        }]}
                    >
                        <Input 
                            type={passwordType}
                            size="large"
                            placeholder= "**********"
                            className='bg-[#ECECEC] border-0 rounded-none'
                            prefix={<LockOutlined className='text-[grey] mr-2' />}
                            suffix ={<Button 
                                icon={
                                    passwordType === "passoword" ? <EyeOutlined /> : <EyeInvisibleOutlined />
                                } 
                                type="text"
                                shape="circle" 
                                onClick={()=>setPasswordType(passwordType === "password" ? "text" : "passowrd")} 
                            />}        
                        />
                    </Item>
                    <Item>
                        <Button
                            size="large"
                            htmlType="submit"
                            type="primary"
                            className="bg-[blue] rounded-none"
                        >Signin</Button>
                    </Item>
                </Form>

                <div className="flex items-center justify-center gap-2">
                    <span>Don't have an account?</span>
                    <Link href="/signup" className="text-[blue]">Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;