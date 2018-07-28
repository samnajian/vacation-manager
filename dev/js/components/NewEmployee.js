import React from "react";
import Row from "./elements/Row";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Label from "./elements/Label";

const NewEmployee = ({save}) => {
    let values = {};

    const handleSubmit = event => {
        event.preventDefault();
        console.log(values);
        save(values);
    };

    const onInputChange = e => values = {...values, [e.target.name]: e.target.value};

    return (
        <Row>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="employeeFirstName">
                        First Name
                    </Label>
                    <Input type="text" id="employeeFirstName" name="employee[firstName]" onChange={onInputChange}/>
                </div>
                <div>
                    <Label htmlFor="employeeLastName">
                        Last Name
                    </Label>
                    <Input type="text" id="employeeLastName" name="employee[lastName]" onChange={onInputChange}/>
                </div>
                <div>
                    <Label htmlFor="employeeAllowedVacations">
                        Allowed vacations:
                    </Label>
                    <Input type="number" id="employeeAllowedVacations" name="employee[allowedVacations]"
                           onChange={onInputChange}/>
                </div>
                <div>
                    <Button type="submit" primary>Save</Button>
                </div>
            </form>
        </Row>
    );
};

export default NewEmployee;