import * as React from 'react';
// import { getItemById } from './crud';

const mcc = 'background:black;color:darkorange;';


const Form = () => {
    return (
        <>Form</>
    );
}

// export interface FormProps {
//     context: any;
// }

// export interface FormState {
//     item?: any;
// }

// class Form extends React.Component<FormProps, FormState> {
//     constructor(props: FormProps) {
//         super(props);
//         this.state = {};
//     }

//     public async componentDidMount() {
//         // console.log('%c Form --> cdm --> this.props', mcc, this.props);
//         // console.log('%c Form --> cdm --> this.state', mcc, this.state);
//         const item12 = await getItemById('Tasks', 12);
//         this.setState({ item: item12 });
//     }

//     public componentDidUpdate(prevProps: FormProps, prevState: FormState) {
//         console.log('%c Form --> cdu --> this.state', mcc, this.state);
//     }

//     public render() {

// return (
//     <>Form</>
// );
//     }
// }

export default Form;