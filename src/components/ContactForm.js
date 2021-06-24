import React, {useState, useEffect} from 'react'

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: "",
        mobile: "",
        email: "",
        address: ""
    }

    const [state, setState] = useState(initialFieldValues)

    useEffect(() => {
        if(props.currentId === '') {
            setState({
               ...initialFieldValues
            })
        } else {
            setState({
                ...props.contactObjects[props.currentId]
            })
        }
    }, [props.contactObjects, props.currentId])


    const handleInput= e => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name] : value
        })
    }

    const handleSubmit= e => {
        e.preventDefault();
        props.addOrEdit(state)
    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" value={state.fullName}  onChange={handleInput}/>
            </div>
            <div className="form-row">
            <div className="form-group input-group col-md-6">
                 <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobile"></i>
                    </div>
                </div>
                <input className="form-control" type="text" placeholder="Mobile" name="mobile" value={state.mobile}
                    onChange={handleInput}
                />
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="email" value={state.email}  onChange={handleInput}/>
            </div>

            </div>
            <div className="form-group">
                <textarea className="form-control" placeholder="Address" name="address" value={state.address}  onChange={handleInput}
                    />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId === '' ? 'Save' : 'Update'} className="btn btn-primary btn-block"/>
            </div>
        </form>
    )
}

export default ContactForm