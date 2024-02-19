"use client"
import { useState } from "react"

import CmsLayout from "@/components/shared/layout/cms"

import {
    Button, Drawer, Form, Input, Select, TextArea
} from 'antd'
import {
    PlusCircleOutlined
} from '@ant-design/icons'

const Plans = ()=>{

    const [openDrawer, setOpenDrawer] = useState(false)



    return (
        <CmsLayout>
            <Button 
                size="large" 
                type="primary"
                className="bg-indigo-600"
                icon={<PlusCircleOutlined />}
                onClick={()=>setOpenDrawer(true)}
            >Add plan</Button>
            <Drawer
                title="New Plan"
                width={400}
                open={openDrawer}
                onClose={()=>setOpenDrawer(false)}
            >
                <Form>
                    <Form.Item
                        label="plane name"
                        name="title"
                        rules={[{
                            required: "enter plane name"
                        }]}
                    >
                        <Input className="rounded-sm" />
                    </Form.Item>
                    <Form.Item
                        label="description"
                        name="description"
                    >
                        <Input.TextArea rows={4} placeholder="Optional" className="rounded-sm" />
                    </Form.Item>

                    <Form.Item
                        label="Billing frequency"
                        name="billing"
                    >
                       <Select>
                            <Select.Option value="days">Days</Select.Option>
                            <Select.Option value="weeks">Weeks</Select.Option>
                            <Select.Option value="months">Months</Select.Option>
                            <Select.Option value="years">Years</Select.Option>
                       </Select>
                    </Form.Item>
                </Form>
            </Drawer>
        </CmsLayout>
    )
}

export default Plans;