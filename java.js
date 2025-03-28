 let onlineclass = document.querySelectorAll('.onlineclasspt');
 let onlineclass1 = onlineclass[0];
 let  offlineclass = onlineclass[1];
 let testseries = onlineclass[2];
 let studymaterial = onlineclass[3];

 let submenu = document.querySelector('.submenu-lawentrace');


 onlineclass1.addEventListener('mouseenter',
    () => {
        submenu.style.display = 'block';
    }
 )

 offlineclass.addEventListener('mouseenter',
    () =>{
        alert('offlineclass');
    }
 )


 testseries.addEventListener('mouseenter',
    () =>{
        alert('testseries');
    }
 )


 studymaterial.addEventListener('mouseenter',
    () =>{
        alert('studymaterial');
    }
 )
