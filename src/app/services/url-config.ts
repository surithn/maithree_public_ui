import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

	constructor(){};

	
	urlList: any = {
		baseUrl 			: "/server/api/v1",
		baseImageUrl		: "/server",
		//localBaseUrl 		: "http://localhost:5555/server/api/v1",
		//localBaseImageUrl	: "http://localhost:5555/server",
		// klocalBaseUrl 		: "http://10.239.68.124:5555/server/api/v1",
		// klocalBaseImageUrl	: "http://10.239.68.124:5555/server",
		jlocalBaseUrl 		: "http://10.239.62.242:5555/server/api/v1",
		jlocalBaseImageUrl	: "http://10.239.62.242:5555/server",
		devBaseUrl			: "",
		devBaseImageUrl		: ""
	}

	getBaseUrl() {
		return this.urlList['jlocalBaseUrl'];
	}

	getBaseUrlForImages(){
		return this.urlList['jlocalBaseImageUrl'];
	}


}