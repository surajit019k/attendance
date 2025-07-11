let data=[
            {
                'subject':'maths',
                'count':12,
                'total':16,
            },
            {
                'subject':'data str',
                'count':24,
                'total':30,
            },
            {
                'subject':'java',
                'count':15,
                'total':16,
            },
            {
                'subject':'os',
                'count':16,
                'total':16,
            },
            {
                'subject':'web tech',
                'count':10,
                'total':16,
            },
            {
                'subject':'hindi',
                'count':13,
                'total':16,
            },
            {
                'subject':'ic',
                'count':18,
                'total':20,
            },
        ]
        let total_rating=30;

        data.forEach(dept=>{
            let rating_progress=`
            <div class="rating__progress-value">
                <p>${dept.subject}</p>
                <div class="progress">
                    <div><p>${dept.total}</p></div>
                    <div class="bar" style="width:${(dept.count/total_rating)*100}%;"></div>
                    <div><p>${dept.count.toLocaleString()}</p></div>
                </div>
            </div>
            `;

            document.querySelector('.rating__progress').innerHTML+=rating_progress;
        });