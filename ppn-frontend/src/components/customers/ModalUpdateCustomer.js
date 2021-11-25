import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, useEffect } from "react";
import { CustomerContext } from "../../contexts/CustomerContext";

const ModalUpdateCustomer = () => {
  // Contexts
  const {
    customerState: { customer },
    showUpdateCustomerModal,
    setShowUpdateCustomerModal,
    updateCustomer,
  } = useContext(CustomerContext);

  // State
  const [updatedCustomer, setUpdatedCustomer] = useState(customer);

  useEffect(() => setUpdatedCustomer(customer), [customer]);

  const { name, email, phoneNumber, service, message } = updatedCustomer;

  const onChangeUpdatedCustomerForm = (event) =>
    setUpdatedCustomer({
      ...updatedCustomer,
      [event.target.name]: event.target.value,
    });

  const closeDialog = () => {
    setUpdatedCustomer(customer);
    setShowUpdateCustomerModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await updateCustomer(updatedCustomer);
    setShowUpdateCustomerModal(false);
    // setShowToast({ show: true, message, type: success ? "success" : "danger" });
  };

  return (
    <Modal show={showUpdateCustomerModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>
          Chỉnh sửa thông tin khách hàng <span>{customer.name}</span>
        </Modal.Title>
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
              onChange={onChangeUpdatedCustomerForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Số Điện Thoại"
              name="phoneNumber"
              required
              value={phoneNumber}
              onChange={onChangeUpdatedCustomerForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={onChangeUpdatedCustomerForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              value={service}
              name="service"
              onChange={onChangeUpdatedCustomerForm}
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
              placeholder="Description"
              name="description"
              value={message}
              onChange={onChangeUpdatedCustomerForm}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Thoát
          </Button>
          <Button variant="primary" type="submit">
            Lưu!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalUpdateCustomer;
