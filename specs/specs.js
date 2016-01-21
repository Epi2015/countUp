describe('divCount', function() {

  it("returns false if countBy is larger than countTo", function() {
    expect(divCount(5, 50)).to.equal(false);
  });
  it("returns a divisable quotient", function(){
    expect(divCount (50,5)).to.equal(10);
  });

  it("counts to a specific number if it is evenly divisible", function(){
    expect(divCount (15, 3)).to.eql([3, 6, 9, 12, 15]);
  });

  it("counts to a specific number if it is not evenly divisible", function(){
    expect(divCount (16, 3)).to.eql([3, 6, 9, 12, 15]);
  });


});
