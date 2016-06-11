
		<!-- <?php wp_list_comments(); ?>

<?php // Do not delete these lines
	if ('comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die ('Please do not load this page directly. Thanks!');

	if (!empty($post->post_password)) { // if there's a password
		if ($_COOKIE['wp-postpass_' . COOKIEHASH] != $post->post_password) {  // and it doesn't match the cookie
			?>

			<p class="post-description">Enter password</p>

			<?php
			return;
		}
	}

	/* This variable is for alternating comment background */
	$oddcomment = '';
?>

<br />
<?php if ($comments) : ?>

    <div class="commentlist alert alert-success post-description">
		<?php wp_list_comments('avatar_size=64'); ?>
	</div>

 <?php else : // this is displayed if there are no comments so far ?>

	<?php if ('open' == $post->comment_status) : ?>
		<!-- If comments are open, but there are no comments. -->

	 <?php else : // comments are closed ?>
		<!-- If comments are closed. -->

	<?php endif; ?>
<?php endif; ?>


<?php if ('open' == $post->comment_status) : ?>
<br />
<div id="respond">
<div class="post-description">
	<small><?php cancel_comment_reply_link(); ?></small>
</div>

<?php if ( get_option('comment_registration') && !$user_ID ) : ?>
<p class="post-description">Please,  <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>">Sign In </a> for comments</p>
<?php else : ?>


<!--there's a form-->
<div class="post-description">Write your comment:</div><br>

<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" class="pure-form">

	<?php if ( $user_ID ) : ?>

	<p>Good day, <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="Выйти">Exit &raquo;</a></p>

	<?php else : ?>

	<label class="post-description">Name</label>
	<div class="post-description">
		<span class="add-on"><i class="icon-user"></i></span><input type="text" name="author" placeholder="name">
	</div>
  <br>
	<label class="post-description">E-mail</label>
	<div class="post-description">
		<span class="add-on"><i class="icon-envelope"></i></span><input type="text" name="email" placeholder="example@mail.ru">
	</div>
  <br>
  <label>Your web site</label>
	<div class="input-prepend">
		<span class="add-on"><i class="icon-home"></i></span><input type="text" name="url" placeholder="http://example.com">
	</div>

	<?php endif; ?>

	<textarea id="comment" style="display: none;" name="comment"></textarea>
  <br>
	<label>Text message</label>
  <br>
	<textarea id="real-comment" name="real-comment"></textarea>

	<?php if( function_exists(checkbot_show) ) { checkbot_show(); } ?>
	<p><input name="submit" type="submit" id="submit" tabindex="5" value="Send" class="pure-button" />
	<?php comment_id_fields(); ?>
	</p>
	<?php do_action('comment_form', $post->ID); ?>

</form>
<?php endif; // If registration required and not logged in ?>
</div>

<?php endif; // if you delete this the sky will fall on your head ?>
	<script src="http://www.mak-blog.ho.ua/wp-content/themes/makblog/js/script.js"></script>
