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
                width={500}
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
                    <span>Billing Frequency</span>
                    <div className="flex gap-3">
                        <Form.Item
                            name= 'interval'
                            rules={[{
                                required: 'enter plan interval'
                            }]}
                        >
                        <Input type="number" className="rounded-sm w-[70px]" />
                        </Form.Item>
                        <Form.Item
                            name="period"
                            rules={[{
                                required: "enter plan period"
                            }]}
                            className="flex-1"
                        >
                            <Select>
                                <Select.Option value="days">Days</Select.Option>
                                <Select.Option value="weeks">Weeks</Select.Option>
                                <Select.Option value="months">Months</Select.Option>
                                <Select.Option value="years">Years</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="Billing Amount"
                        name="amount"
                        rules={[{
                            required: "amount is required"
                        }]}
                    >
                    <Input
                        className="rounded-sm"
                        placeholder="1,000"
                        addonBefore={<label>pkr</label>}
                        addonAfter={<label>Per Unit</label>}
                        size="large"
                    >
                    </Input>
                    </Form.Item>
                    <Form.Item>
                        <div className="flex gap-4">
                            <Button
                                htmlType="submit"
                                type="primary"
                                className="bg-indigo-600 rounded-sm"
                                size="large"
                            >Create Plan</Button>

                            <Button
                                htmlType="submit"
                                type="primary"
                                className="bg-indigo-600 rounded-sm"
                                size="large"
                                onClick={()=>setOpenDrawer(false)}
                            >Cancel</Button>
                        </div>
                    </Form.Item>
                </Form>
            </Drawer>
        </CmsLayout>
    )
}

export default Plans;