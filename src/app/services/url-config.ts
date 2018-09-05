import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

	constructor(){};

	
	urlList: any = {
		baseUrl 			: "/server/api/v1",
		baseImageUrl		: "/server",
		localBaseUrl 		: "http://localhost:5555/server/api/v1",
		localBaseImageUrl	: "http://localhost:5555/server",
		devBaseUrl			: "",
		devBaseImageUrl		: ""
	}

	getBaseUrl() {
		return this.urlList['baseUrl'];
	}

	getBaseUrlForImages(){
		return this.urlList['baseImageUrl'];
	}


}