import React, {Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = [
    {name: 'email', elementName:'input',type:'email',placeholder:'Your email'},
    {name: 'password', elementName:'input',type:'password',placeholder:'Your password'}
]


class Login extends Component{
    render(){
        return(
           
            <div className="login-page">

                <div className="container">

                    <div className="login-form">

                    <div className="row">
                        <h1>Login</h1>
                        </div>

                            



                        <div className="row">
                         
                        <form onSubmit={this.props.handleSubmit}>

                        {fields.map((item,index)=> {
                                
                                return (
                                                <div className="col-md-12">
                                                <Field {...item} 
                                                key={index}
                                                value={this.props.values[item.name]}
                                                name={item.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[item.name])}
                                                errors={this.props.errors[item.name]}
                                                
                                                />
                                                
                                                </div>
                                                
                                                )
                                    
                                    
                                    
                                   
                                   })}

                                        <div className="col-md-12">
                                            <button className="btn btn-primary">Login</button>
                                            </div>



                                            </form>
                        </div>





                    </div>




                </div>





            </div>
        
        
        
        
        
        
        
        
        
        
            )}}export default withFormik({

            mapPropsToValues: () => ({
                email:'',
                password:''
            }),

            validationSchema: Yup.object().shape({
                email: Yup.string().email('email is invalid.').required('You need to login with an email address'),
                password: Yup.string().required('you need to enter your password.')
            }),

            handleSubmit: (values,  {setSubmitting})  => {
                console.log("Login attempt  ",values);
            
            }








        }) (Login);
/**mapPropsToValues?: (props: Props) => Values
If this option is specified, then Formik will transfer its results into updatable form state and make these values available to the new component as props.values. If mapPropsToValues is not specified, then Formik will map all props that are not functions to the inner component's props.values. That is, if you omit it, Formik will only pass props where typeof props[k] !== 'function', where k is some key.

Even if your form is not receiving any props from its parent, use mapPropsToValues to initialize your forms empty state.

 */

  
