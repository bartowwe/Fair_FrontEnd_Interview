(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},21:function(e,t,a){e.exports=a(52)},26:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(19),l=a.n(i),r=(a(26),a(4)),o=a(5),s=a(7),h=a(6),d=a(8),u=a(1),m=a(3),v=a.n(m),p=(a(10),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={vehicle:e.vehicle},a.fetch=a.fetch.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"fetch",value:function(){var e=this;v.a.get("https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page=1").then(function(t){var a=t.data.data.vehicles;e.setState({vehicles:a}),console.log(a)}).catch(function(e){e instanceof Error?console.log("Error is: ",e.message):console.log("Other error: ",e.data)})}},{key:"handleclick",value:function(){return"checkmark"}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"vehicalbox"},c.a.createElement("ul",null,c.a.createElement("li",{id:"description"},c.a.createElement("label",{className:"container",id:"box"},c.a.createElement("input",{type:"checkbox",onClick:function(){e.handleclick()}}),c.a.createElement("span",{className:"checkmark"}))),c.a.createElement("li",{id:"description"},c.a.createElement("img",{src:this.state.vehicle.chrome_image_url,id:"carpic"})),c.a.createElement("li",{id:"description",style:{textAlign:"left"}},c.a.createElement("div",{id:"info"},c.a.createElement("div",null,this.state.vehicle.model_year," ",this.state.vehicle.make," ",this.state.vehicle.model),c.a.createElement("div",null,"Trim: ",this.state.vehicle.trim),c.a.createElement("div",null,"Miles: ",this.state.vehicle.mileage))),c.a.createElement("li",{id:"description",style:{textAlign:"left"}},c.a.createElement("div",{id:"price"},c.a.createElement("div",null,"Start Fee: ",c.a.createElement("span",{style:{color:"#FF651B"}},this.state.vehicle.product_financials[0].start_fee_cents/100)),c.a.createElement("div",null,"Monthly Fee: ",c.a.createElement("span",{style:{color:"#FF651B"}},this.state.vehicle.product_financials[0].monthly_payment_cents/100))))))}}]),t}(n.Component)),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={id:e.id,vehicle:{}},a.fetch=a.fetch.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"fetch",value:function(){var e=this;v.a.get("https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/"+this.state.id).then(function(t){var a=t.data.data.vehicles;e.setState({vehicles:a}),console.log(a)}).catch(function(e){e instanceof Error?console.log("Error is: ",e.message):console.log("Other error: ",e.data)})}},{key:"handleclick",value:function(){return"checkmark"}},{key:"render",value:function(){return c.a.createElement("div",{id:"showroomsub"},"No Car is selected")}}]),t}(n.Component),g=a(20),E=a.n(g),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={vehicles:[],showVehicals:[],activePage:1},a.fetch=a.fetch.bind(Object(u.a)(Object(u.a)(a))),a.handlePageChange=a.handlePageChange.bind(Object(u.a)(Object(u.a)(a))),a.renderVehicals=a.renderVehicals.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:function(){var e=this;v.a.get("https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page=1").then(function(t){for(var a=[],n=0;n<Object.keys(t.data.data.vehicles).length;n++)a.push(t.data.data.vehicles[Object.keys(t.data.data.vehicles)[n]]);for(var c=[],i=0;i<5;i++)c.push(a[i]);e.setState({vehicles:a,showVehicals:c}),console.log(a)}).catch(function(e){e instanceof Error?console.log("Error is: ",e.message):console.log("Other error: ",e.data)}),v.a.get("https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/19XFC2F59GE2276732016").then(function(e){console.log(e)}).catch(function(e){e instanceof Error?console.log("Error is: ",e.message):console.log("Other error: ",e.data)})}},{key:"handlePageChange",value:function(){for(var e=arguments[0],t=[],a=5*(e-1);a<5*(e-1)+5;a++)t.push(this.state.vehicles[a]);console.log("active page is ".concat(e),t),this.setState({activePage:e,showVehicals:t}),this.renderVehicals()}},{key:"renderVehicals",value:function(){return c.a.createElement("div",null,this.state.showVehicals.map(function(e,t){return c.a.createElement("li",{key:t}," ",c.a.createElement(p,{vehicle:e})," ")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"App-logo",alt:"logo"},"fair")),c.a.createElement("div",{id:"parentbox"},c.a.createElement("table",{style:{margin:"auto"}},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{id:"carlist"},c.a.createElement("ul",{id:"vlist"},this.renderVehicals()),c.a.createElement("div",null,c.a.createElement(E.a,{id:"paginate",activePage:this.state.activePage,itemsCountPerPage:5,totalItemsCount:this.state.vehicles.length,pageRangeDisplayed:5,onChange:this.handlePageChange}))),c.a.createElement("td",{id:"showroom"},c.a.createElement(f,null)))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.80e1d0cd.chunk.js.map