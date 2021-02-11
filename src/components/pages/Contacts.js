import React,{Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';
/* Creo fields con differenza tra sezioni per poter collocare i campi in colonne diverse */
const fields= {

sections: [
    [
    {name: 'name' ,elementName:'input',type: 'text' ,placeholder:'Your Name *' },
    {name: 'email' ,elementName:'input',type: 'email' ,placeholder:'Your email *' },
    {name: 'phone' ,elementName:'input',type: 'text' ,placeholder:'Your phone number *' }

],
[
{name: 'message' ,elementName:'textarea',type: 'text' ,placeholder:'Type your message*' }
]]
}

class Contacts extends Component{






render(){
    return(

        <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <form  onSubmit={this.props.handleSubmit} id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row align-items-stretch mb-5">
                     {/*mappo in base alla sezione l'array dei campi del form  */}
                    {fields.sections.map((section,sectionIndex)=>{
                        return(
                            <div className="col-md-6">
                                {/*
                                 mappo la sezione dell'array, inserendo come props i valori passati,
                                 la proprietà onChange per generare l'evento una volta modificato il campo,
                                 
                                 The onblur event occurs when an object loses focus.
                                 The onblur event is most often used with form validation code (e.g. when the user leaves a form field).
                                 Tip: The onblur event is the opposite of the onfocus event.
                                 Tip: The onblur event is similar to the onfocusout event. 
                                 The main difference is that the onblur event does not bubble. 

                                 touched per aggiornare la proprietà touched e in AND con Errors generare errori in <p className="help-block text-danger">
                                 
                                 errors per generare gli errori con formik + yup
                                 */}
                                {section.map((field,i)=>{
                                    return <Field {...field} 
                                                    key={i}
                                                    value={this.props.values[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={(this.props.touched[field.name])}
                                                    errors={this.props.errors[field.name]}
                                    />
                                })}
                            </div>
                        )
                    })}
                        <div className="form-group mb-md-0">
                          
                    </div>
                    <div className="col-md-6">
                       
                    </div>
                </div>
                <div className="text-center">
                    <div id="success"></div>
                    <button 
                     className="btn btn-primary btn-xl text-uppercase" 
                     id="sendMessageButton"
                     type="submit"
                     
                     >Send Message</button>
                </div>
            </form>
        </div>
    </section>

    )
}
/*Formik is a small library that helps you with the 3 most annoying parts:

Getting values in and out of form state
Validation and error messages
Handling form submission
By colocating all of the above in one place, 
Formik will keep things organized--making testing, refactoring, 
and reasoning about your forms a breeze

 npm install formik --save

 withFormik({oggetto con le seguenti caratteristiche})
*/
}export default withFormik({
    /* metodo per generare values dalle props,consultabili ispezionando i componenti */
mapPropsToValues:() => ({
name:'',
email:'',
phone:'',
message:'',
}),
/*Usando Yup, inserisco validationSchema come segue per collegare i valori delle props con uno schema di validazione */
validationSchema:Yup.object().shape(
    {
        name:Yup.string()
        .min(3,'The name is too short.').
        required('you must enter your name'),

        email:Yup.string().
        email('You need to insert a valid email')
        .required('We need your email'),

        phone:Yup.string()
        .min(10,'please provide a valid phone number')
        .max(15,'your phone number is too long')
        .required('we need a phone number'),

        message:Yup.string()
        .min(500,'you need to provide us more details').
        required('message is required.')
    }

)

,
handleSubmit : (values,{setSubmitting})=>{
    console.log(values);
    alert("You've submitted the form");
}


/*handleSubmit scritto qui viene utilizato in <form  onSubmit={this.props.handleSubmit}>  */

})(Contacts);