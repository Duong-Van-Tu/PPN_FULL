import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CustomerContext } from "../../contexts/CustomerContext";
import { Modal, Button, Form } from "react-bootstrap";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ModalAddCustomer = () => {
  // Contexts
  const { addCustomer, showAddCustomerModal, setShowAddCustomerModal } =
    useContext(CustomerContext);

  // state
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  // value
  const { name, email, phoneNumber, service, message } = newCustomer;

  const onChangeNewCustomerForm = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  // const history = useHistory();

  // pagination
  const query = useQuery();
  // const page = Number(query.get("page")) || 1;
  const onSubmit = async (e) => {
    e.preventDefault();
    await addCustomer(newCustomer);
    resetAddCustomerData();
  };

  const resetAddCustomerData = () => {
    setNewCustomer({
      name: "",
      email: "",
      service: "",
      phoneNumber: "",
      message: "",
    });
    setShowAddCustomerModal(false);
  };

  const handleClose = () => {
    resetAddCustomerData();
  };

  return (
    <>
      <Modal show={showAddCustomerModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin khách hàng</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Họ Tên"
                name="name"
                required
                value={name}
                onChange={onChangeNewCustomerForm}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Số Điện Thoại"
                name="phoneNumber"
                required
                value={phoneNumber}
                onChange={onChangeNewCustomerForm}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                required
                value={email}
                onChange={onChangeNewCustomerForm}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                value={service}
                name="service"
                onChange={onChangeNewCustomerForm}
              >
                <option value="">-- Dịch Vụ --</option>
                <option value="Khai báo hải quan">Khai báo hải quan</option>
                <option value="Vận tải hàng hóa nội địa">
                  Vận tải hàng hóa nội địa
                </option>
                <option value="Vận tải đường bộ">Vận tải đường bộ</option>
                <option value="Vận tải đường biển">Vận tải đường biển</option>
                <option value="Vận tải đường không">Vận tải đường không</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Lời nhắn của khách hàng"
                name="message"
                value={message}
                onChange={onChangeNewCustomerForm}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Thoát
            </Button>
            <Button variant="primary" type="submit">
              Lưu!
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalAddCustomer;
