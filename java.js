//  let onlineclass = document.querySelectorAll('.onlineclasspt');
//  let onlineclass1 = onlineclass[0];
//  let  offlineclass = onlineclass[1];
//  let testseries = onlineclass[2];
//  let studymaterial = onlineclass[3];

//  let submenu = document.querySelector('.submenu-lawentrace');


//  onlineclass1.addEventListener('mouseenter',
//     () => {
//         submenu.display = 'block';
//     }
//  )

//  offlineclass.addEventListener('mouseenter',
//     () =>{
//         alert('offlineclass');
//     }
//  )


//  testseries.addEventListener('mouseenter',
//     () =>{
//         alert('testseries');
//     }
//  )


//  studymaterial.addEventListener('mouseenter',
//     () =>{
//         alert('studymaterial');
//     }
//  )



$('.onlineclasspt:nth-child(1)').mouseenter(
    () =>{
        $('.submenu-lawentrace').css('display','block');
    }

    
)

$('.onlineclasspt:nth-child(2)').mouseenter(
    () =>{
        $('.submenu-lawentrace').css('color','red');
    }
)

$('.onlineclasspt:nth-child(3)').mouseenter(
    () =>{
        $('.submenu-lawentrace').css('background-color','blue');
    }
)

$('.onlineclasspt:nth-child(4)').mouseenter(
    () =>{
        $('.submenu-lawentrace').css('color','green');
    }
)