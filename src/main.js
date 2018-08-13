$(".bottomLine").parent().map((index,parentList)=>{
    $(parentList).on('mouseenter',(e)=>{
        $(e.currentTarget).find('.bottomLine').addClass('active')
    })
    $(parentList).on('mouseleave',(e)=>{
        $(e.currentTarget).find('.bottomLine').removeClass('active')
    })
})