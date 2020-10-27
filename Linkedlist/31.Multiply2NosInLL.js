// Same as num represented in LL.

// Logic
while (first != null || second != null)  
    {  
        if (first != null)  
        {  
            num1 = num1*10 + first.data;  
            first = first.next;  
        }  
        if (second != null)  
        {  
            num2 = num2*10 + second.data;  
            second = second.next;  
        }  
    }  
  
    // Return multiplication of  
    // two numbers  
    return num1*num2; 
