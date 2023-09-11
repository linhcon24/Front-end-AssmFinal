window.Products = function ($scope, $http, $location, $routeParams) {
  $scope.listSP = [];
  $http.get("http://localhost:3000/sp").then(function (response) {
    if (response.status === 200) {
      $scope.listSP = response.data;
    }
  });

  var id = $routeParams.id;
  $scope.detail = {};
  $http.get("http://localhost:3000/sp/" + id).then(function (response) {
    $scope.detail = response.data;
  });

  $scope.listSize = [];
  $http.get('http://localhost:3000/kichco').then(function(reponse){
    $scope.listSize = reponse.data;
  });
  
  $scope.getSPbyid = function (id) {
    $scope.sanpham = {};
    $http.get("http://localhost:3000/sp/" + id).then(function (response) {
      $scope.sanpham = response.data;
    });
  };

  $scope.them = function () {
    return $http
      .post("http://localhost:3000/sp", {
        id: $scope.id,
        anh: $scope.anh,
        ten: $scope.ten,
        dacdiem: $scope.dacdiem,
        loai: $scope.loai,
        gia: $scope.gia,
        soluongton: $scope.soluongton,
        kichco: $scope.kichco,
        mota: $scope.mota,
        chatlieu: $scope.chatlieu,
        thietke: $scope.thietke,
        uudiem: $scope.uudiem,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Thêm thành công!!");
          $location.path("/sp");
        }
      });
  };

  $scope.sua = function () {
    $http.get("http://localhost:3000/sp/" +$scope.id).then(function (response) {
      if (response.status === 200) {
        $http
          .put("http://localhost:3000/sp/" + $scope.id, {
            anh: $scope.anh,
            ten: $scope.ten,
            dacdiem: $scope.dacdiem,
            loai: $scope.loai,
            gia: $scope.gia,
            soluongton: $scope.soluongton,
            kichco: $scope.kichco,
            mota: $scope.mota,
            chatlieu: $scope.chatlieu,
            thietke: $scope.thietke,
            uudiem: $scope.uudiem,
          })
          .then(
            function (reponse) {
              if (reponse.status === 200) {
                alert("Sửa thành công!!");
                $location.path("/sp")
              }
            },
            function (error) {
              alert("Khong tim thay");
            }
          );
      }
    });
  };

  $scope.xoa = function (id) {
    var confirm = window.confirm("Bạn có muốn xóa?");
    if (confirm == false) {
      return;
    }
    $http.delete("http://localhost:3000/sp/" + id).then(function (reponse) {
      if (reponse.status === 200) {
        alert("Xóa thành công!!");
        $location.path("/sp")
      }
    });
  };

  $scope.detail = function (id) {
    $http.get("http://localhost:3000/sp/" + id).then(function (response) {
      console.log(response);
      if (response.status === 200) {
        $scope.id = response.data.id;
        $scope.anh = response.data.anh;
        $scope.ten = response.data.ten;
        $scope.dacdiem = response.data.dacdiem;
        $scope.loai = response.data.loai;
        $scope.gia = response.data.gia;
        $scope.soluongton = response.data.soluongton;
        $scope.kichco = response.data.kichco;
        $scope.mota = response.data.mota;
        $scope.chatlieu = response.data.chatlieu;
        $scope.thietke = response.data.thietke;
        $scope.uudiem = response.data.uudiem;
      }
    });
  };

  $scope.fill = function (id) {
    $http.get("http://localhost:3000/sp/" + id).then(function (response) {
      console.log(response);
      if (response.status === 200) {
        $scope.id = response.data.id;
        $scope.anh = response.data.anh;
        $scope.ten = response.data.ten;
        $scope.dacdiem = response.data.dacdiem;
        $scope.loai = response.data.loai;
        $scope.gia = response.data.gia;
        $scope.soluongton = response.data.soluongton;
        $scope.kichco = response.data.kichco;
        $scope.mota = response.data.mota;
        $scope.chatlieu = response.data.chatlieu;
        $scope.thietke = response.data.thietke;
        $scope.uudiem = response.data.uudiem;
      }
    });
  };
};
