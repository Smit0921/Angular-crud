import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";

export function passwordMatch(password: string,repassword:string){
    return function(form:AbstractControl){
        const passwordvalue=form.get(password)?.value;
        const confirmpasswordvalue=form.get(repassword)?.value;

        if(passwordvalue===confirmpasswordvalue){
            return null;
        }
        return{passwordMismatchError:true}
    }
}