import { C } from "./C";
export function Bus() {
    return(
        <C title="Request a bus now" color="#0000ff" url="bus" l="view hours and directions">
           <p className="pb-3">you're student and you want to go with school bus  <a href="/sign-in">login</a></p>
        </C>
    );
}