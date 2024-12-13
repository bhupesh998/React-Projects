import { useActionState, useContext } from "react";
import { OpinionsContext } from "../store/opinions-context";
// formStatus hook cann't be used on component that contains the form and formaction instead it must be used in some nested component
import { useFormStatus } from "react-dom";
import Submit from "./Submit";




export function NewOpinion() {

  const [formState, formAction, pending] = useActionState(handleSubmit, { errors: null})
  const {addOpinion }= useContext(OpinionsContext)

  // this formaction can be asynchronous and synchronous 
  // if its async react will actually wait for promise i.e returned by action function to return before it internally marks the form as submitted
  async function handleSubmit(prevState, formData){
    const title = formData.get('title')
    const body = formData.get('body')
    const userName = formData.get('userName')

    let errors=[]
    if(title.trim().length < 5){
      errors.push("Title Should be more than 5 characters")
    }


    if(body.trim().length < 10 || body.trim().length > 300){
      errors.push("body should be more than 10-300 character")
    }

    if(!userName.trim()){
      errors.push("Please Provide User Name")
    }

    if(errors.length > 0){
      return { errors, enteredValues: {
        title, body, userName
      }}
    }

    await addOpinion({title, body, userName})

    return { errors: null}

  }

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>

        { formState.errors && <ul className="error">
          { formState.errors.map((error)=> (<li key={error}>{error}</li>))}
          </ul>}

        <Submit />
      </form>
    </div>
  );
}
