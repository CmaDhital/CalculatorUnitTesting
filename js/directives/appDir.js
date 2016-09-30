angular.module('app').directive('appDir', function(){

    return {
        restrict:'EAMC',
        //template: "test",
        templateUrl:"/views/calculator.html",
        link:function($scope)
        {
            var calculator=function()
            {
                var num1=0;
                var num2=0;
                
                //setter
                this.setNum1=function(param)
                {
                    num1=parseInt(param);
                }
                 this.setNum2=function(param)
                {
                    num2=parseInt(param);
                }
                
                
                //getter
                this.getNum1=function()
                {
                    return num1;
                }
                
                 this.getNum2=function()
                {
                    return num2;
                }
                 
                 this.add=function(){
                     return num1+num2;
                 }
                 
                 this.multiply=function()
                 {
                     return num1*num2;
                 }
            }
            
            
            $scope.submit=function()
            {
                var calcObj=new calculator();
                calcObj.setNum1($scope.firstNum);
                calcObj.setNum2($scope.secondNum);
                
                $scope.add=calcObj.add();
                $scope.pro=calcObj.multiply();
            }
        }
      

    }


});
