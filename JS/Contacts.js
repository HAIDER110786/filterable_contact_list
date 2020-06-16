document.querySelector('#SearchContact').addEventListener('keyup',()=>{
        
        const searchedContact = (document.querySelector('#SearchContact').value)
        
        const allAvailableContacts = document.querySelectorAll('#contacts');
        
        allAvailableContacts.forEach(contact=>{
                
            let j = '';
                
            for(let i = 0 ; i < searchedContact.length ; i++)
            {
                    
                j+=contact.textContent[i];
            }
            
            console.log(contact.childElementCount);
                
            if(j!==searchedContact)
            {
                    
                contact.style.display = 'none';
            }
             else{
                    
                contact.style.display = 'block';
            }
        }
        )
    }
)



