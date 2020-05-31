import Vue from 'vue'
import App from './App'

new Vue ({
    // render(createElement){
    //     return createElement(App)
    // }
    
    // O mesmo que:

    render: h => h(App)

}).$mount("#app")