/*
    Nội dung: sử dụng từ khóa public, private, protected đối với biến và phương thức

                    Inside          Outside         Children
    public             +                +               +
    private            +                -               -
    protected          +                -               +


    Diễn giải:
    -- public: có thể truy cập ở bên trong và ngoài class, truy cập ở lớp con kế thừa từ lớp cha
    -- private: chỉ có thể truy cập ở bên trong lớp class khai báo biến, hàm đó
    -- protected: có thể truy cập ở bên trong lớp và lớp con kế thừa.
    
*/
