import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const AUTHORIZATION = "test";
        return next.handle(
            request.clone({
                setHeaders: {
                    Authorization: `Bearer ${AUTHORIZATION}`
                }
            })
        );
    }
}
