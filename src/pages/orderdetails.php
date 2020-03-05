<?php
include_once('../components/footer.php');
include_once('../components/header.php');
include_once('../components/checkoutprogress.php');


make_header([], ["../styles/orderdetails.css","../styles/checkoutprogress.css"]);

make_checkoutprogress(); ?>

<h3>Order Details</h3>
<div class="form">
    <form>
        <div class="form-group">
            <input type="text" class="form-control" id="checkoutemail" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="checkoutname" placeholder="Full Name">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="deliveryaddress" placeholder="Delivery Address">
        </div>
        <h6>Billing Address </h6>

        <div class="radios">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="addresses" id="sameradio" value="same">
            <label class="form-check-label" for="sameradio">Same as delivery</label>
        </div>
        <div class="form-check form-check-inline">

            <input class="form-check-input" type="radio" name="addresses" id="differentradio" value="different">
            <label class="form-check-label" for="differentradio">Different from delivery address</label>
        </div>
        </div>


        <div class="form-group">
            <input type="text" class="form-control" id="Billing Address" placeholder="Delivery Address">
        </div>
    </form>
</div>


<?php
make_footer();
?>