// TC= O(n)
    function detectLoop(list) {
        if (this.isEmpty()){
           return null;
        }
        let oneStep= list.head;
        let twoSteps= list.head;

        while(oneStep && twoSteps && twoSteps.nextElement) {
            oneStep= oneStep.nextElement;
            twoSteps= twoSteps.nextElement.nextElement;

            if (oneStep === twoSteps) {
                return true;
            }
        }
        return false;
    }
