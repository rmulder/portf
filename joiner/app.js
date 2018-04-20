const merge = require('easy-pdf-merge');

merge(['/Users/ronanmanoj/Desktop/print_check_list.pdf','/Users/ronanmanoj/Desktop/RonanCoverLetter.pdf'],'/Users/ronanmanoj/Desktop/OUTPUT.pdf',function(err){
 
        if(err)
        return console.log(err);
 
        console.log('Successfully merged!');
 
});
