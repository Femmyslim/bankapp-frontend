function BigProcessingButton({isSubmitting= "0", text="submit", onClick, disabled}) {

    return(
        <>
        {isSubmitting===0 ?(
        <button
        type = 'submit'
        className={
            disabled 
            ? "disabled border px-8 py-3 bg-[#40196d] focus:outline-none disabled:opacity-50 w-[20rem] mt-[2rem] hover:-translate-y-1 duration-700 p-4 rounded-lg text-white text-sm"
            : "border border-[#40196d] bg-[#40196d] w-[20rem] mt-[2rem] hover:-translate-y-1 duration-700 p-4 rounded-lg text-white text-sm"
        }
        onClick={onClick}
        disabled={disabled}
        >{text}</button>)
        :(
            <button
                type="button"
                className="flex items-center border border-[#40196d] bg-[#40196d] w-[20rem] mt-[2rem] hover:-translate-y-1 duration-700 p-2 rounded-lg text-white text-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px"
                    width="24" height="24"
                    viewBox="0 0 172 172"
                    style=" fill:#26e07f;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1fb141"><path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path></g></g>
                </svg>    
            </button>

        )} 
        </>
    )
}


export default BigProcessingButton