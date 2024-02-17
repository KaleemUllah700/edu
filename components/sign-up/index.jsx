"use client"
import { useState, useForm } from 'react'
import { 
    Form,
    Input,
    Button,
    Select
} from 'antd';
import Image from 'next/image'
import { MailOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import countries from '@/json/countries'

const { Item } = Form
const { Option } = Select
const { signupForm } = Form.useForm 
const SignUp = ()=>{
    const [passwordType, setPasswordType] = useState("password")

    const signup = (values)=>{
        signupForm.resetFields()
    }

    const CourseCode = ()=>{
        return (
            <Item noStyle>
                <Select className="w-[90px]" defaultValue="+92">
                    {
                        countries.map((country, countryIndex)=>(
                            <Option value={country.dial_code} key={countryIndex}>{country.dial_code}</Option>
                        ))
                    }
                </Select>
            </Item>
        )
    }

    return (
        <div className="grid grid-cols-2">
            <div className='flex flex-col items-center justify-center min-h-screen bg-[#ECE9EC] gap-8'>
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
            <div className='flex flex-col p-16 gap-8'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-3xl font-bold'>Sign up for your account!</h1>
                    <p className='text-sm text-[grey]'>Nice to see you! Please Sign up with your account</p>
                </div>
                <Form
                    form={signupForm}
                    layout='vertical'
                    autoComplete='off'
                    onFinish={signup}
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
                        label={<span className="text-dm font-semibold">Mobile</span>}
                        name="mobile"
                        rules={[{
                            required: true
                        }]}
                    >
                        <Input 
                            type="mobile"
                            size='large'
                            placeholder='Mobile'
                            addonBefore= { <CourseCode /> }
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
                        >signup</Button>
                    </Item>
                </Form>
            </div>
        </div>
    )
}

export default SignUp;