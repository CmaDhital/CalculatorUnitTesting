describe("appDirTest Cases", function(){
    beforeEach(angular.mock.module('testtemplate'));
    beforeEach(angular.mock.module('app'));
    var element, scope;
    
    beforeEach(inject(function($rootScope, $compile){
        console.log("Triggered");
        element=angular.element('<app-dir></app-dir>');
        scope=$rootScope.$new();
        $compile(element)(scope);
        scope.$digest();
        
        
                                scope.firstNum=2;
                                scope.secondNum=3;
                                scope.submit();
        
        
            }));
    

    
                                 it("test for first", function(){
                                     expect(scope.firstNum).toBe(2);
                                });
                                
                               it("test for second", function(){
                                     expect(scope.secondNum).toBe(3);
                                });
                                
                                it("test for add", function(){
                                     expect(scope.add).toBe(5);
                                });
                                      it("test for multiply", function(){
                                     expect(scope.pro).toBe(6);
                              
                                
                            });
                                });
    
