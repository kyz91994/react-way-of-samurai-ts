import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/Forms.module.css'
import {Preloader} from "../common/Preloader";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const maxLength20 = maxLengthCreator(20)
const LoginForm = ({handleSubmit,error}: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}  component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            {error&&<div className={styles.errorPassOrEmail}>{error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean)=> void

}
type MapStateToPropsType = {
    isAuth: boolean
    // isFetching: boolean
}
type LoginPropsType = MapDispatchToProps&MapStateToPropsType
const mapStateToProps = (state: AppStateType) => ({isAuth: state.auth.isAuth})
export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }


    return <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>


    </>
}
export default connect(mapStateToProps, {login})(Login)


