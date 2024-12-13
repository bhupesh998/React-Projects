import { useContext } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { useActionState } from "react";
import { useOptimistic } from "react";


// formaction not only canb be set on form by action attribute instead we can also use it on button using formAction
export function Opinion({ opinion: { id, title, body, userName, votes } }) {

  const { upvoteOpinion, downvoteOpinion } = useContext(OpinionsContext)
  const [upFormState, upFormAction, UpPending] = useActionState(upVoteAction, null)
  const [downFormState, downFormAction, downPending] = useActionState(downVoteAction, null)

  // it takes value that needs to be updated optimistically and a callback function
  // the setOptimisticVotes can be called in any formaction 
  // optimisticVotes is a temporary state that will render on UI while the form is being submitted thereafter this state will be thrown away
  // and the original UI state will get render
  const [optimisticVotes, setOptimisticVotes] = useOptimistic(votes, (prevVotes, mode)=>{
    return mode==='up'? prevVotes+1 : prevVotes-1
  })

  async function upVoteAction(){
    console.log("upvote");
    setOptimisticVotes('up')
    await upvoteOpinion(id)
  }

  async function downVoteAction(){

    console.log("downVote");
    setOptimisticVotes('down')
    await downvoteOpinion(id)
  }




  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upFormAction} disabled={UpPending || downPending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

      { /* optimisticVotes is a tempory state that will get overridden based on original state*/}
        <span>{optimisticVotes}</span>

        <button formAction={downFormAction} disabled={UpPending || downPending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
