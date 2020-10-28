import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBod, } from 'reactstrap';

const ListsComponent = (props) => {

    const [ userLists, setUserLists ] = useState([]);
    const []

    useEffect(() => {
        fetch("http://localhost:8080/list", {
        headers: {
            "Authorization": props.token,
        },
    })
    .then(response => response.json())
    .then(body => {
        setUserLists(body.results);
    })
    .catch((error) => console.log(error));
    }, []);

    return(
        <div id="listsView">
            <div id="listViewHeader">
                <h1>Your Lists</h1>
                <Button color="success">New List</Button>
            </div>
            {
                userLists.length > 0 
                ? userLists.map(item =>  {
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText>{item.description}</CardText>
                                    <Button>
                                    {/* Todo: update this button */}
                                    View List Items
                                    </Button>
                            </CardBody>
                        </Card>
                    )
                })
                : (
                    <h1>You have no lists</h1>
                )
            }
        </div>
    );
};

export default ListsComponent;