import React, {Component} from 'react';
import PropTypes from 'react-proptypes';
import {Panel} from './../elements';
import {Button, Row} from '../elements';

interface IFormProps {
    save: (data: object) => any;
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

    static defaultProps = {
        save: (data) => {}
    };

    /**
     * Todo: Add validation before saving the form
     */
    private validate = (data) => true;

    private handleSubmit = e => {
        e.preventDefault();
        if (!this.validate(this.state)) {
            return;
        }
        this.props.save(this.state.data);

        // clear form
        this.setState({data: {}});
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
                data: {
                    ...state.data, [key]: value
                }
            })
    );

    render() {
        return (
            <Panel>
                <form onSubmit={this.handleSubmit}>
                    <InnerFormComponent onInputChange={this.onInputChange} {...this.state.data} {...this.props}
                                        setFormState={this.setFormState}/>
                    <Row reversed>
                        <Button type='submit' primary={true}>Save</Button>
                    </Row>
                </form>
            </Panel>
        );
    }
};

export default FormHOC;