import React,{Fragment,Component} from 'react';
class ShowTime extends Component{
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleString(),
            a:100,
            b:200
        }
        console.log('constructor');
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            });
        },1000)
    }
    shouldComponentUpdate(){
        if(this.state.a>10){
            return true;
        }else{
            return false;
        }
        
    }
    
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(preProps,preState,data){

        console.log("componentDidUpdate");
        console.log(preProps,preState,data);
        console.log(this.state.time);
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshot');
        return{name:this.state.a};
    }
    render(){
        var {name,age} = this.props;
        return (<Fragment>
                    {/*条件渲染 */}
                    {name.length>5?<div>姓名:{name}</div>:''}
                    {name.length>5?<div>姓名:{name}</div>:''}

                    <div>{this.state.time}</div>
                    
                    {/*循环渲染*/}
                    <div>
                        {
                            age.map((item,index)=>{
                                if(index%2 === 0){
                                    return <p key={item}>{item}</p>
                                }
                                
                            })
                        }
                    </div> 
                </Fragment>)
    }
}
//默认导出：只能导出一次，被引入时可以重命名
export default ShowTime;



//命名导出：可以导出多个，被引入时与导出的名一致
// export {ShowTime}
