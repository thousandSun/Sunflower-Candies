import { CorsOptions } from "cors";
import { allowedOrigins } from "./allowedOrigins";

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if(!origin){
            // handle when origin is undefined (same-origin request)
            callback(null, true)
        }else if(allowedOrigins.indexOf(origin) !== -1){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

export {corsOptions}