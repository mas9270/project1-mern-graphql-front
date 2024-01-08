import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toastifyWarning, toastifySuccess, toastifyError, validatePassword, validationMobilePhone, validateEmail } from '../../../utility/utility';
import LoadingBtn from '../LoadingBtn/LoadingBtn';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../../../api/mutations/clientsMutation';
import { GET_CLIENTS } from '../../../api/queries/clientsQueries';

interface ClientParametrsType {
    name: string,
    email: string,
    phone: string,
}


export default function AddClients() {

    const [submitLoading, setSubmitLoading] = useState<boolean>(false)
    const [show, setShow] = useState(false);
    const submitBtn: React.ReactElement | any = <Button type="submit" variant="primary">ذخیره</Button>


    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const [clientInfo, setClientInfo] = useState({
        name: '',
        email: '',
        phone: ""
    })

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name: "", email: "", phone: "" },
        refetchQueries: [{ query: GET_CLIENTS }]
    })

    async function resultOnSubmit(parameters: ClientParametrsType) {

        let name: string = parameters.name
        let email: string = parameters.email
        let phone: string = parameters.phone

        addClient({
            variables: { name, email, phone }
        }).then(()=>handleClose())
    }

    return (
        <div className='w-100 mt-5 mb-2'>
            <Button variant="primary" onClick={handleShow}>
                افزودن
            </Button>

            <Formik initialValues={clientInfo} onSubmit={values => { resultOnSubmit(values) }} >
                {({ errors, touched, validateField, validateForm }) => (
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>افزودن کاربر</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="name" className="mb-1">نام</label>
                                    <Field type="text" name="name" className="form-control" maxLength="50" tabIndex="1" placeholder="نام را وارد کنید" />
                                    <ErrorMessage name="name" render={msg => <div className="formik-errors" >{msg}</div>}></ErrorMessage>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="email" className="mb-1">ایمیل</label>
                                    <Field type="text" name="email" validate={validateEmail} className="form-control" maxLength="50" tabIndex="2" placeholder="A-Za-z0-9" />
                                    <ErrorMessage name="email" render={msg => <div className="formik-errors" >{msg}</div>}></ErrorMessage>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="phone" className="mb-1">شماره همراه</label>
                                    <Field type="text" name="phone" validate={validationMobilePhone} className="form-control" maxLength="11" tabIndex="3" placeholder="09150000000" />
                                    <ErrorMessage name="phone" render={msg => <div className="formik-errors" >{msg}</div>}></ErrorMessage>
                                </div>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        بستن
                                    </Button>
                                    <LoadingBtn loading={submitLoading}>
                                        {submitBtn}
                                    </LoadingBtn>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>

                    </Modal>
                )}
            </Formik>
        </div>
    )
}
