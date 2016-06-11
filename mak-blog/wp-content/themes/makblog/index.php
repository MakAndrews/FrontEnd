<?php get_header(); ?>

<?php get_sidebar(); ?>


    <div class="content pure-u-1 pure-u-md-3-4">
        <div>
            <!-- A wrapper for all the blog posts -->
            <div class="posts">
                <h1 class="content-subhead">POSTS</h1>

                <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>

                <!-- A single blog post -->
                <section class="post">
                    <header class="post-header">
  
                        <h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

                        <p class="post-meta">
                            By <a href="#" class="post-author">Tilo Mitra</a>.
                            <?php
                            $posttags = get_the_tags();
                            if ($posttags) {
                              foreach($posttags as $tag) {
                                $tag_links[] = '<a class="post-category post-category-design" href="' . get_tag_link($tag->term_id) . '">' . $tag->name  . '</a>';
                              }
                              echo join(  ',  ', $tag_links);
                            }
                          ?>

                          <span class="post-author">Comments (<?php comments_popup_link('0','1','%'); ?>)</span>

                        </p>
                    </header>

                    <div class="post-description">
                        <p>
                            <?php the_content(); ?>
                        </p>
                    </div>
                </section>
            </div>

          <?php endwhile; ?>

          <?php
          // Previous/next page navigation.
          the_posts_pagination( array(
          'prev_text'          => __( 'Previous page', 'twentyfifteen' ),
          'next_text'          => __( 'Next page', 'twentyfifteen' ),
          'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentyfifteen' ) . ' </span>',
          ) );
          ?>

          <?php else : ?>
          <?php endif; ?>

<?php get_footer(); ?>
