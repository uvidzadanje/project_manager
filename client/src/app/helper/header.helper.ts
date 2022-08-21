import { HttpHeaders } from "@angular/common/http"

export const getAuthorizationHeader = (token: string) => {
  return getHeader({'Authorization': `Bearer ${token}`});
}

const getHeader = (options: any) => {
  return {
    headers: new HttpHeaders(options)
  }
}
