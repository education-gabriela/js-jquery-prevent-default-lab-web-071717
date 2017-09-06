describe('To Do List', function() {

  beforeEach(function() {

    setFixtures('<body><h1> TO DO LIST</h1><h3> Your List</h3><div id="list"><ol></ol></div><h3> Add Items To Your List</h3><form><label form="item" name="item"><input type="text" id="item"><input type="submit" value="submit"></form></body>');
  });

  it('binds a submit event to the form', function() {
    submitForm();
    var form = $('form')[0];
    var formSubmitEvent = $._data(form, "events");
    var myKey = [];
    for (var key in formSubmitEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("submit");
  });

  it('#adds input to the text field', function() {
    submitForm();
    $('#item').val("finish this lab");
    $('form').submit();
    $('#item').val("eat chips");
    $('form').submit();
    expect($("#list ol li")[0].innerHTML).toEqual("finish this lab");
    // debugger;
    expect($("#list ol li:last")[0].innerHTML).toEqual("eat chips")

  });





});
