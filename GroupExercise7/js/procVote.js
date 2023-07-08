function procVote(event, MaBaiViet, isloginok ){
    const Vote = event.target;
    if(Vote.classList.contains()){
        $.ajax({
            URL: 'Process/process_Vote.php',
            type: 'POST',
            data: {
                NguoiDang: MaBaiViet,
                NguoiLike: isloginok //là người đang sử dung tài khoản (là chính ta)
            },
        })
    }
    
}