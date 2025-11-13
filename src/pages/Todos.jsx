import { useEffect, useRef, useState } from "react";
import { fetchTodos } from "../data/todos";
import { Form, Table, Badge, Button, Modal } from "react-bootstrap";


const Todos = () => {
    const newIdRef = useRef()
    const newTitleRef = useRef()
    const [todosRaw, setTodosRaw] = useState([]);
    const [todos, setTodos] = useState([]);
    const [onlyWaiting, setOnlyWaiting] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [numPages, setNumPages] = useState(3)
    const [curPage, setCurPage] = useState(1)

    useEffect(() => {
        setTodosRaw(fetchTodos());
    }, []);

    useEffect(() => {
        // ถ้าเปิด switch → แสดงเฉพาะ waiting (completed = false)
        const filtered = onlyWaiting
            ? todosRaw.filter((item) => !item.completed)
            : todosRaw;
        setTodos(filtered);
    }, [todosRaw, onlyWaiting]);

    const waitingClicked = (id) => {
        console.log(id)
        const foundTodo = todos.find((todo) => {
            return todo.id === id
        })
        foundTodo.completed = true

        setTodosRaw([...todosRaw])// force to be effect (refersh)
    }

    const deleteClicked = (id) => {
        setTodosRaw(todosRaw.filter((todo) => todo.id !== id))
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveClicke = (id, title) => {
        console.log(id, title)
        if (title.trim() !== "") {
            setTodosRaw([...todosRaw, {
                userId: 1,
                id,
                title,
                completed: false,
            }])
        }
        newIdRef.current.value = ""
        newTitleRef.current.value = ""

        handleClose()
    }

    return (
        <div className="d-flex flex-column align-items-center mt-3">
            {/* ส่วน Show only waiting + dropdown */}
            <div
                className="d-flex justify-content-between align-items-center mb-3"
                style={{ width: "80%", maxWidth: "1000px" }}
            >
                {/* Modal --------------------------------------------------------*/}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add todo</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>ID</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={todosRaw.reduce((prev, todo) => todo.id > prev ? todo.id : prev
                                        , -1) + 1}
                                    disabled={true}
                                    ref={newIdRef}
                                />
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"></Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    placeholder="new todo, here!"
                                    autoFocus ref={newTitleRef}
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => saveClicke(Number(newIdRef.current.value), newTitleRef.current.value)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* modal end ----------------------------------------------------------*/}
                <div className="d-flex align-items-center gap-2">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        checked={onlyWaiting}
                        onChange={(e) => setOnlyWaiting(e.target.checked)}
                        label="Show only"
                    />
                    <Badge bg="warning" text="dark" className="fs-6">
                        waiting <i className="bi bi-clock"></i>
                    </Badge>
                </div>

                <Form.Select
                    className="w-auto"
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    value={itemsPerPage}
                >
                    <option value={5}>5 items per page</option>
                    <option value={10}>10 items per page</option>
                    <option value={50}>50 items per page</option>
                    <option value={100}>100 items per page</option>
                </Form.Select>
            </div>

            {/* ตาราง Todos */}
            <div style={{ width: "80%", maxWidth: "1000px" }}>
                <Table striped bordered hover responsive>
                    <thead className="table-dark text-center">
                        <tr>
                            <th style={{ width: "3rem" }}>ID</th>
                            <th>Title</th>
                            <th style={{ width: "15rem" }}>Completed&nbsp;
                                <Button onClick={() => handleShow()}>
                                    <i className='bi bi-plus'></i>
                                </Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos
                            .filter((todo, index) => {
                                const min = (curPage - 1) * itemsPerPage
                                const max = curPage * itemsPerPage - 1
                                return index >= min && index <= max
                            })
                            .map((todo) => (

                                <tr key={todo.id}>
                                    <td className="text-center">
                                        <h5>
                                            <Badge bg="secondary">{todo.id}</Badge>
                                        </h5>
                                    </td>
                                    <td>{todo.title}</td>
                                    <td className="text-end">
                                        {todo.completed ? (
                                            <Badge bg="success" className="fs-6 px-3">
                                                done
                                            </Badge>
                                        ) : (
                                            <Badge bg="warning" text="dark" className="fs-6 px-3" onClick={() => { waitingClicked(todo.id) }}>
                                                waiting <i className="bi bi-clock"></i>
                                            </Badge>
                                        )}
                                        <Button variant="danger" onClick={() => deleteClicked(todo.id)} size="sm" className="ms-2">
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>

            {/* ปุ่มเปลี่ยนหน้า */}
            <div className="d-flex justify-content-center gap-2 my-3">
                <Button variant="outline-primary" onClick={() => setCurPage(1)} disabled={curPage === 1} size="sm">
                    First
                </Button>
                <Button variant="outline-primary" onClick={() => {
                    if (curPage > 1) {

                        setCurPage((p) => p - 1)
                    }

                }} disabled={curPage === 1} size="sm">
                    Previous
                </Button>
                <span className="align-self-center fw-semibold" >{curPage} / {numPages}</span>
                <Button variant="outline-primary" onClick={() => {
                    if (curPage < numPages) {

                        setCurPage((p) => p + 1)
                    }

                }} disabled={curPage === numPages} size="sm">
                    Next
                </Button>
                <Button variant="outline-primary" onClick={() => setCurPage(numPages)} disabled={curPage === numPages} size="sm">
                    Last
                </Button>
            </div>
        </div>
    );
};

export default Todos;

