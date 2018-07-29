import React, {Component} from 'react';
import PropTypes from 'react-proptypes';
import {Row} from './../elements';

interface IFormProps {
    save: (data) => {}
}

interface IFormState {
    data: object;
}

const FormHOC = (InnerFormComponent) => class extends Component<IFormProps, IFormState> {

    state: IFormState = {
        data: {}
    };

    static propTypes = {
        save: PropTypes.func.isRequired
    };

    static defaultProps = {};

    /**
     * Todo: Add validation before saving the form
     */
    private validate = (data) => true;

    private handleSubmit = e => {
        e.preventDefault();
        if (this.validate(this.state.data)) {
            this.props.save(this.state.data);
        }
    };

    private onInputChange = e => {
        const key = e.currentTarget.name;
        const value = e.target.value;
        this.setFormState(key, value);
    };

    private setFormState = (key: string, value: any) => this.setState(
        state =>
            ({
                ...state,
                data: {...state.data, [key]: value}
            })
    );

    render() {
        return (
            <Row>
                <form onSubmit={this.handleSubmit}>
                    <InnerFormComponent onInputChange={this.onInputChange} {...this.props}
                                        setFormState={this.setFormState}/>
                </form>
            </Row>
        );
    }
};

export default FormHOC;